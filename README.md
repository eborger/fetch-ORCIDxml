#Retrieve your ORCID xml metadata

A simple html form to query the ORCID API and retrieve the ORCID xml metadata for any given ORCID id.

An alternative to using the [https://pub.orcid.org/v2.0/]("ORCID Swagger UI") or the commandline script:
'''
curl -X GET --header 'Accept: application/vnd.orcid+xml' 'https://pub.orcid.org/v2.0/[ORCIDiD]'
'''
