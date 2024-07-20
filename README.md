# MMC Feedback

## Image Build
```shell
docker build --tag platerecognizer/mmc-feedback .
```

## Run image

```shell
docker run --rm -v pb_data:/pb/pb_data -p 8080:8080 platerecognizer/mmc-feedback
```


## Uploading data
1. Login as admin(credentials are in initial migrations) and create a user
2. Check collection(`feedback`) API page for docs. Use PocketBase client libs
3. Python Example
Install `python3 -m pip install pocketbase`
Run script:
```py
from pathlib import Path
import mimetypes
from pocketbase import PocketBase  # Client also works the same
from pocketbase.client import FileUpload


client = PocketBase('http://127.0.0.1:8080')


# authenticate as regular user
user_data = client.collection("users").auth_with_password(
    "danleyb2@gmail.com", "brian123")
# check if user token is valid
assert user_data.is_valid, "Invalid Credentials"


filepath = Path("images/image7.jpeg")


with filepath.open(mode='rb') as file:
    filename = filepath.name
    content_type, _ = mimetypes.guess_type(filename)
    r = client.collection('feedbacks').create({
        'make': 'Toyota',
        'model': 'Auris',
        'color': 'Red',
        'image': FileUpload(filename, file, content_type),
    })
    print(r)


results = client.collection("feedbacks").get_list(1, 20, {})
print(results)
```
