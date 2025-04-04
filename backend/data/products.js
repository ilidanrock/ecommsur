const products = [
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    image: 'https://private-user-images.githubusercontent.com/70895686/430504968-7589e09c-64ac-4eea-8366-9592f8e358c9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTMzMzgsIm5iZiI6MTc0Mzc5MzAzOCwicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDQ5NjgtNzU4OWUwOWMtNjRhYy00ZWVhLTgzNjYtOTU5MmY4ZTM1OGM5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE4NTcxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcwMTU5ZGZkY2Y4N2IwOTgwYTE4MzI0YWZiODEyODViYzRkOWFhMWIzNWY0NzMzOTk0MzlhNDc4N2MwZjUzODMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ica2Tc1vpdxjc2perMYH6Q-hvC5s6sg09N9FsqTMwpM',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'iPhone 11 Pro 256GB Memory',
    image: 'https://private-user-images.githubusercontent.com/70895686/430506185-bcd3ac9f-e21f-49ec-aabc-bca839076244.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTM1MzMsIm5iZiI6MTc0Mzc5MzIzMywicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDYxODUtYmNkM2FjOWYtZTIxZi00OWVjLWFhYmMtYmNhODM5MDc2MjQ0LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE5MDAzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2NmU1YmIwOWY1MTJjZDg3MDE2MzkwZWU3MTMyODA4ZWNmMGI3NmE1NTkyZjE0YmU2ZDA0MTk0YTQ1MDU3YTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.i0yuvu8L-frx2UqJjhNAr3tgCP_cisQ95kg97gF1kvY',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    image: 'https://private-user-images.githubusercontent.com/70895686/430505155-4e2faa17-4213-45eb-bd18-5fe871f51183.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTMyNzYsIm5iZiI6MTc0Mzc5Mjk3NiwicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDUxNTUtNGUyZmFhMTctNDIxMy00NWViLWJkMTgtNWZlODcxZjUxMTgzLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE4NTYxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE4ZTYzOWE5NzFlZWE3MjJhMWE2NDVmZmNhYWMzNzU4MWNkOGI3ZjEzNzU3OWY0NGM0MmVhYTU1ZWUwNjQ0NzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.oDuId3eNWcDhOsuvAoMx2yqIjnzHY_ClfY5QAaFnmh8',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Sony Playstation 4 Pro White Version',
    image: 'https://private-user-images.githubusercontent.com/70895686/430506255-56b72fc5-de94-47dc-9458-8066aac043e6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTI5MjIsIm5iZiI6MTc0Mzc5MjYyMiwicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDYyNTUtNTZiNzJmYzUtZGU5NC00N2RjLTk0NTgtODA2NmFhYzA0M2U2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE4NTAyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyZTkzNGI2MzRhMTIwNTkyZmM3MzVmZDlhZDdhYzkxODU5Y2JjOTE0MzFlNjEzMWU2MGRlNzc3YWJiMGUxNmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.x5wkUKfnvqrZT2EFMdaSFYrEfeRMe3rtx3qSgtesjD4',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Logitech G-Series Gaming Mouse',
    image: 'https://private-user-images.githubusercontent.com/70895686/430506107-b9dd74d6-13d4-4639-ad4a-e611626b1b20.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTMyMjUsIm5iZiI6MTc0Mzc5MjkyNSwicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDYxMDctYjlkZDc0ZDYtMTNkNC00NjM5LWFkNGEtZTYxMTYyNmIxYjIwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE4NTUyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk4OThlMWM4MGRlYmVlYWNkZWJmNDEwMjg4Y2I1NDU2MmQ3OTFhNmE0NDM0MWVjMjRjMGJmODBjMDg0MTNmYTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ENwQIV2cImSNPuGL25v62CXQokUJrroo4lBCNrfNtms',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    image: 'https://private-user-images.githubusercontent.com/70895686/430505081-ae573b8b-54f7-4f79-acd0-35a3e0defacd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM3OTMzMDMsIm5iZiI6MTc0Mzc5MzAwMywicGF0aCI6Ii83MDg5NTY4Ni80MzA1MDUwODEtYWU1NzNiOGItNTRmNy00Zjc5LWFjZDAtMzVhM2UwZGVmYWNkLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA0VDE4NTY0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzNDkwMjdlZjljMzA2MGRjMDgxNGI1MzU3YmJiMGJmODZmNzk4ZjE5NmViOTQ3ZWE3MzRiY2Y0YmVmNGFkOGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UZZE7h3HcGvdptlZiKXSyKH_foLcVo5A2xfAcFa1qJI',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

module.exports = products
