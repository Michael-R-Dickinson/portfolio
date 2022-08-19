import boto3 # type: ignore
import json

client = boto3.client('ses')

SENDER = 'michael.dickinson686@gmail.com'
RECIPIENT = 'michael.dickinson3949@gmail.com'

def https_format(status_code, message):
    return {
        'statusCode': str(status_code),
        'body': json.dumps (str(message))

    }
    
def https_paramater_error ():
      return https_format (
          400, 
          "Email endpoint requires paramaters email, "\
          "name, message"
          )


def lambda_handler (event, context):
  if not event.get("queryStringParameters"):
    return https_paramater_error ()  
    
  if not all ([event["queryStringParameters"].get(param)
               for param in ['email', 'name', 'message']]):
    return https_paramater_error()
  
  try: 
    params = event["queryStringParameters"]
    email_handler (params['email'], params['name'], params["message"])
  except Exception as e:
    return https_format (500, str(e))
  
  return https_format (200, 'Email Sent!')

def email_handler(email, name, message):

    body_html = f"""<html>
        <head></head>
        <body>
          <h2>Automated Contact Form Email</h2>
          <h3>Sent by {name}</h3>
          <p>{message}</p> 
          <br/>
          <p> sent from {email}</p>
        </body>
        </html>
                    """

    email_message = {
        'Body': {
            'Html': {
                'Charset': 'utf-8',
                'Data': body_html,
            },
        },
        'Subject': {
            'Charset': 'utf-8',
            'Data': f"Hello from {name}"
        },
    }

    ses_response = client.send_email(
        Destination={
            'ToAddresses': [RECIPIENT],
        },
        Message=email_message,
        Source=SENDER,
    )

    print(f"ses response id received: {ses_response['MessageId']}.")
