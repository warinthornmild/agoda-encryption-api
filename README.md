# Agoda Encryption Api

## Installation

1. Install dependency modules.
```
npm install
```

2. Run server.
```
npm run dev
```

## Usage

1. Encrypt: encrypt your data with AES algorithm
<br>
POST /encrypt <br>
req.body: 
```
{
    "data": [
        {
            "text": "text1"
        },
        {
            "text": "text2"
        }
    ]
}
```
response: 
```
{
    "data": [
        {
            "encrypted": "U2FsdGVkX19m7UHlrqHUNi35P/ryPC4zOEkFNHweZAE="
        },
        {
            "encrypted": "U2FsdGVkX1+R7RWWk+gY71sOE55saSBgZ1rxvfskaQY="
        }
    ]
}
```
<br>

2. Decrypt: decrypt your data with AES algorithm
<br>
POST /encrypt <br>
req.body: 
```
{
    "data": [
        {
            "encrypted": "U2FsdGVkX19m7UHlrqHUNi35P/ryPC4zOEkFNHweZAE="
        },
        {
            "encrypted": "U2FsdGVkX1+R7RWWk+gY71sOE55saSBgZ1rxvfskaQY="
        }
    ]
}
```
response: 
```
{
    "data": [
        {
            "encrypted": "U2FsdGVkX19m7UHlrqHUNi35P/ryPC4zOEkFNHweZAE="
        },
        {
            "encrypted": "U2FsdGVkX1+R7RWWk+gY71sOE55saSBgZ1rxvfskaQY="
        }
    ]
}
```
