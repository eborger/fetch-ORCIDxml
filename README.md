Retrieve your ORCID xml metadata
=======
A simple html form to query the ORCID API and retrieve the ORCID xml metadata for any given ORCID id.

An alternative to using the [ORCID Swagger UI](https://pub.orcid.org/v2.0/) or commandline:

```console
curl -X GET --header "Accept: application/vnd.orcid+xml" "https://pub.orcid.org/v2.0/[ORCIDiD]"
```
