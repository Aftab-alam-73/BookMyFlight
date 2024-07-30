import firebase from 'firebase-admin';  

firebase.initializeApp({
    credential:firebase.credential.cert({
        "type": "service_account",
        "project_id": "notification-b6b5d",
        "private_key_id": "06c805be39b47e24fe39f7d4a7ced03596a32536",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCHB5mcpcYdbidV\nPsFFo+ui4ZajzoeTxylH/VJk7IcnWUDSgAUNVZz/mMzmQIF5R5zHf5z1DKM/ljkA\nwtOg9B9ZIOIxECEhRl2OK6YjwXZRQD6D9858zJ7WGsGwxgzIvFP5QH2vPdUgNyCp\nnAjAWw1cfEI7iFERmDWugG+VVPN+6I4npJ8MtoPn71AMcdX61XHPhNxnI9tyiJNS\n2JLRhEUsjF41Qob2GE6d8ungQuLW8tcwPzEV1/KxZwFRmaPxhSPhLU44ybE0KA6B\nKke50oOLL2N8kRB3mdo3dbhOhticFzxSh2kbSQTGI1b86wvJw7/jFMU5mzWBtVHX\na+lTcVEBAgMBAAECggEAAXA3WWhtka36ZL12lArEJskqmGUPHh1Do17yKMLuqOC0\nk1VzpaiR079tfyj6CW11y3fQl26RN9spBpOnYFOEuLeO5JfGfucDwLuhFpMKows5\nQJZpfGb2ghh5KRb//Hyp6T8ajk0CizLTzKNjIg+U5v/9bt/JAMlqDiP+OZ/k44cm\neVGP6c4Zk5RM2KvK1Ao2nK3mzyt9XykAnMcNaDJ0p9gMimDVDZ6ErIH3C2axyv4D\ntxdQth5cmRatdeQyJIoQ2BxXRRhGwIV1ZGcQVtIySGLV34rKx9bS6LagNAtGjzAW\nplvfuqoNhC4hinTHEDDk0QHkGH0cABLrZAJcKH+2kQKBgQC6DFuz+nHo2aIza97j\nQ3c2HrVdid6uyDINipklHW/ixO5D+SXY2sgOPnDW/vkv4ENeUm86fgRrb8Wk9BW/\nlw0CzoaI6dwOieucb8QTtuy6/His8NpNymejr/9xeT+R+W6ya1z1xwdE1dJWl0zC\n6jPuyyc83+oLkx6hmS6wzZAkEQKBgQC5zJEomsr8fQ3MSmh0xJmjNdYXxTmrRvvG\n8iMb7YjzuZXwlD6v0g2ApudtIaoSbCQAW1B/dddA5bcCVB9BqbdYTALxLxlztX0W\nKMr/TRbebivCErtDniVPZesebOWSU/nYyY2Y6QduNw1cvqRZ5A/i+eOEb+TzMd7j\nq19gtsKN8QKBgAvFymu6FkkotFXSppj05O88xDc2CSxAKMKomYY6taDA217bviRZ\nu70DAHrqSXRZGYo3ZyhpXvg5a2VDuLiV41HhJaw2OCGHYqxUejDRK2utnCk9WGMB\nwssd0OkqRfaDtRh/KLO4s2IMsbGfA1F2JnEe083LUXEIDzEkk0rGxy8xAoGAZxTf\n1C9NPxgCd70whtgshShxR27ct/IB7jaY0/3NZaspTPhybwmTBDWVYC61NNNahfgj\niRPQAOlxx5D0ZnHKjupdF4KSFGg0pf6r4UjbzzxAesP5sWIkQRDCiXbRR4XfsC7i\nqFthC/zvJO2AMX8ecUdCu095LpQUnSuPFxFOj4ECgYBLzhpTF8Z8lsHxPH6GfRTt\nnOABUnQBS9UmWTqVURqwsjkR+imB95EEMc01eTGux5OpNff20s0BWBSQFRBQIfjH\nNrpziGgHOzer/apBi0sythVwFh2AJU70QEY8JJRrsUs8WG8VBkS3FtGH9yY5Yy9t\nxGZsnFQZOguyX8UN8+I55Q==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-nl6pc@notification-b6b5d.iam.gserviceaccount.com",
        "client_id": "108807138736362181127",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nl6pc%40notification-b6b5d.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      }
      )
})
export default firebase

