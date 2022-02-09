// Resume data creation and iterating in all For loop task

let resumeData = [{
    "basics": {
      "name": "Your first and last name",
      "email": "Your email address",
      "phone": "A phone number, with any formatting you like. E.g. (555) 555-5555.",
      "degree": "",
      "location": {
        "address": "Your street address or mailing address",
        "postalCode": "Your postal code (ZIP in the U.S.)",
        "city": "Your city",
        "countryCode": "Your country (e.g. USA)",
        "region": "Your region (state in the U.S.)"
      },
      "profiles": [
        {
          "network": "A social media or other profile that you would like to include (e.g. LinkedIn, Twitter)",
          "username": "Your username on this network",
          "url": "A URL to your user profile page"
        }
      ]
    },
    "work": [
      {
        "company": "Your employer name",
        "position": "Your job title",
        "website": "The URL for the employer's website",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
        "summary": "A one-sentence to one-paragraph summary of this employer or position",
        "highlights": [
          "Bullet-point list items that you would like to include along with (or instead of) a summary paragraph."
        ]
      }
    ],
    "education": [
      {
        "institution": "Your school name",
        "area": "Your area of study or degree earned",
        "studyType": "",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your completion date, in YYYY-MM-DD format",
        "gpa": "",
        "courses": [
          ""
        ]
      }
    ],
    "awards": [
      {
        "title": "Your award title",
        "date": "Your date, in YYYY-MM-DD format you received the award",
        "awarder": "Your award given by",
        "summary": "A one-sentence to one-paragraph overview of this award"
      }
    ],
    "skills": [
      {
        "name": "A category of job skills (e.g. 'Programming Languages')",
        "level": "",
        "keywords": [
          "Keywords under this category (e.g. 'Java', 'C++', etc)"
        ]
      }
    ],
    "languages": [
      {
        "language": "Language name",
        "fluency": "Your language fluency"
      }
    ],
    "interests": [
      {
        "name": "A category of interests (e.g. 'Sports')",
        "keywords": [
          "Keywords under this category (e.g. 'Cricket', 'Football', 'Golf')"
        ]
      }
    ]
  }]

//   Normal For loop

for (let i=0; i<resumeData.length; i++){
    console.log(resumeData[i]);
}

// For of loop

for (data of resumeData){
    console.log(data)
}

// for in loop

for ( let index in resumeData){
    console.log(resumeData[index]);
}

// for each loop

resumeData.forEach(element => console.log(element));


// Task-3 : Difference between window , Screen and Document in JS
// I read the following links to understand the concepts

// https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript
// https://dsantoshkumarit.medium.com/difference-between-window-screen-and-document-in-javascript-56bf123dd9e2


