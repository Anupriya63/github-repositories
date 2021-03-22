## Steps to run app locally

1) npm i
2) npm start

## Run tests using: npm test

## Notes
I have used material ui to style coponents and I've override some default classes fo customization.

It is a small application I could have just pass the states as props among components. However, I managed the states at global level using redux and react hooks , keeping in mind project's scalabily.

To make api request I've used axios api because it returns back parssed JSON data and I can directly use the response data. Also, I took advantage of axios interceptor to add http headers in request and to return structured response.

For testcases I've used Jest and Enzyme.



