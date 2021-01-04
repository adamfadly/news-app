# news-app

by : Mochamad Adam Fadly

#### Access

```
API : https://newsapi.org/
http client: http://localhost:8080/
```

#### Routes

Bellows are routes that used in the sever

- base routes USER url : http://localhost:8080/

  - GET : /

    - description : Get All top headlines

    - headers : none

    - response :

      - Success:

        Status Code : 200

        ```
        [
          {
              "source": "id": "google-news","name":"Google News"
          },
          "author": null,
          "title": "Tens of thousands of Argentinians farewell",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY2"
          "urlToImage": null,
          "publishedAt": "2020-11-27",
          "content": null
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Matt Jancer, Gear Team",
            "title": "13 Best Black Friday Deals on Googl",
            "description": "Google has discounted its new Pixel.",
            "url": "https://www.wired.com/story/best-black-friday-google-deals-1-2020/",
            "urlToImage": "https://media.wired.com/photos/5f888e1e033aa21518af44c2/191,
            "publishedAt": "2020-11-27",
            "content": "The Pixel 4A is a good deal if you
          }
        ]
        ```

      - Error :

        Status Code : 400

        ```
        {
          "status": "error",
          "code": "apiKeyMissing",
          "message": "Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTPheader."
        }
        ```

## About The Project

1. Home page showing cards headlines get from top headlines API

2. Every card has 2 buttons,

- button Read More will direct you to the detail page.
- button Edit Title will change chenge the title on card selected

3. Toolbar Search for searching news typing by user
   and the result will appear on cards shown.

### note : API key can only hit like 100 times per 24 hour only,

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# news-app

    ## Usage



    Make sure you have node js has been installed in your computer, then run the commands bellow in your terminal.

    ```
        $ npm run serve
    ```
