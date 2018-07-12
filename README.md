Retrieve your ORCID xml metadata
=======
A simple html form to query the ORCID API and retrieve the ORCID xml metadata for any given ORCID id. Please read [the basic tutorial on reading data on an ORCID record](https://members.orcid.org/api/tutorial/read-orcid-records) for further information and how to get an access token for your account.

The implementation to fetch ORCID metadata in JSON format is still in progress.

This approach is an alternative to using the [ORCID Swagger UI](https://pub.orcid.org/v2.0/) or commandline:

```console
curl -X GET --header "Accept: application/vnd.orcid+xml" "https://pub.orcid.org/v2.0/[ORCIDiD]"
```
