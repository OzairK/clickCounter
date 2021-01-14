# clickCounter
This is a small javascript function which takes in an array of strings which contains domain names and clicks. The function goes through the data and tallies the clicks for each domain and subdomain. Below is a example of an appopriate input and a corresponding output of the function:




Input:
[
   "90, google.com",
   "100, yahoo.com",
   "50, mail.yahoo.com",
   "75, mail.google.com",
   "100, zapatos.uk"
]

output:
{
   "google.com": 165,
   "com": 315,
   "yahoo.com": 150,
   "mail.yahoo.com": 50,
   "mail.google.com": 75,
   "zapatos.uk": 100,
   "uk": 100
}
