import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  moviedata: any;

  categoryList = ["Action", "Romance", "Thriller", "Crime", "Friendship"]
  list = [
    {
      id: 1,
      Title: "Guardians of the Galaxy Vol 2",
      Year: "2017",
      Rated: "PG-13",
      Released: "05 May 2017",
      Runtime: "136 min",
      Genre: "Action, Adventure, Comedy",
      Director: "James Gunn",
      Writer: "James Gunn, Dan Abnett, Andy Lanning",
      Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
      Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      Language: "English",
      Country: "United States",
      Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
      url: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      Ratings: [{ "Source": "Internet Movie Database", "Value": "7.6/10" }, { "Source": "Rotten Tomatoes", "Value": "85%" }, { "Source": "Metacritic", "Value": "67/100" }],
      Metascore: "67",
      imdbRating: "7.6",
      imdbVotes: "681,990",
      imdbID: "tt3896198",
      Type: "movie",
      DVD: "22 Aug 2017",
      BoxOffice: "$389,813,101",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    }
    ,
    {
      id: 2,
      Title: "Harry Potter",
      url: "https://i.postimg.cc/TPygsZjW/harryorgin.jpg",
      Year: 2001,
      Director: "David Yates",
      Actors: "Daniel Radcliff,Bring Harry",
      Language: "English",
      imdbRating: "8.1",
      Genre: "Fantacy"

    },
    {
      id: 3,
      Title: "Titanic",
      url: "https://i.postimg.cc/CxwzD96V/titnc.jpg",
      Year: 1997,
      Director: "James Cameron",
      Actors: "Jack,Rose",
      Language: "English",
      imdbRating: "7.9",
      Genre: "Disaster"
    },
    {
      id: 4,
      Title: "Ashique 2",
      url: "https://i.postimg.cc/LXQz02wf/as.jpg",
      Year: 2013,
      Director: "Mohit Suri",
      Actors: "Rahul,Arohi",
      Language: "Hindi",
      imdbRating: "7.0",
      Genre: "Romance"

    }, {
      id: 5,
      Title: "Ratsasan",
      url: "https://i.postimg.cc/mryqkX6k/rat.jpg",
      Year: 2018,
      Director: "Ram Kumar",
      Actors: "Vishnu,Amala Paul",
      Language: "Tamil",
      imdbRating: "8.3",
      Genre: "Crime"
    },
    {
      id: 6,
      Title: "Zodiac",
      url: "https://i.postimg.cc/L5dKRG0W/zodiac.jpg",
      Year: 2007,
      Director: "David",
      Actors: "Vishnu,Amala Paul",
      Language: "English",
      imdbRating: "8.3",
      Genre: "Mystery"
    },
    {
      id: 7,
      Title: "KGF",
      url: "https://i.postimg.cc/jjwRb6SL/kgf.jpg",
      Year: 2018,
      Director: "Prasanth Neel",
      Actors: "Yash,Shrindhi",
      Language: "Kannada",
      imdbRating: "8.3",
      Genre: "Action"
    },
    {
      id: 8,
      Title: "The Fault In Our Stars",
      url: "https://i.postimg.cc/zfVTYQhK/fault.jpg",
      Year: 2014,
      Director: "John Boone",
      Actors: "Shailene,Anael Elgort",
      Language: "Tamil",
      imdbRating: "7.7",
      Genre: "Romance"
    },
    {
      id: 9,
      Title: "The Fallout",
      url: "https://i.postimg.cc/vHnpJ7Fq/fallou.jpg",
      Year: 2021,
      Director: "Megan Park",
      Actors: "Jenna,jogn",
      Language: "English",
      imdbRating: "7.0",
      Genre: "Friendship"
    },
    {
      id: 10,
      Title: "Anandham",
      url: "https://i.postimg.cc/HxLqRfdX/ana.jpg",
      Year: 2016,
      Director: "Ganesh Raj",
      Actors: "siddhi,Vishak,Annu",
      Language: "Malayalam",
      imdbRating: "7.3",
      Genre: "Friendship"
    },
    {
      id: 11,
      Title: "Ratsasan",
      url: "https://i.postimg.cc/mryqkX6k/rat.jpg",
      Year: 2018,
      Director: "Ram Kumar",
      Actors: "Vishnu,Amala Paul",
      Language: "Tamil",
      imdbRating: "8.3",
      Genre: "Crime"
    },
    {
      id: 12,
      Title: "Ratsasan",
      url: "https://i.postimg.cc/mryqkX6k/rat.jpg",
      Year: 2018,
      Director: "Ram Kumar",
      Actors: "Vishnu,Amala Paul",
      Language: "Tamil",
      imdbRating: "8.3",
      Genre: "Crime"
    },
    {
      id: 13,
      Title: "Section 8",
      url: "https://i.postimg.cc/CLPDB5CR/sect.jpg",
      Year: 2022,
      Director: "Christian Sesm",
      Actors: "Ryan,Kimi",
      Language: "Korean",
      imdbRating: "4.3",
      Genre: "Action"
    },
    {
      id: 14,
      Title: "96",
      url: "https://i.postimg.cc/pXfW46rR/9.jpg",
      Year: 2018,
      Director: "C  Premkumar",
      Actors: "Vijay Sethupathi,Thrisha",
      Language: "Tamil",
      imdbRating: "8.5",
      Genre: "Romance"
    },
    {
      id: 15,
      Title: "Halg Girlfriend",
      url: "https://i.postimg.cc/fRPrKwsL/half.jpg",
      Year: 2017,
      Director: "Mohit",
      Actors: "Sredha Kapoor,Arjun Kapoor",
      Language: "Hindi",
      imdbRating: "4.5",
      Genre: "Romance"
    },
    {
      id: 16,
      Title: "BridesMaids",
      url: "https://i.postimg.cc/0jrScqPk/bri.jpg",
      Year: 2011,
      Director: "Paul",
      Actors: "Kristen Wiig,MayA",
      Language: "English",
      imdbRating: "6.8",
      Genre: "Friendship"
    }

  ]

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }
  inputData = this.fb.group({ search: '' })
  inputData1=this.fb.group({search1: ''})

  ngOnInit(): void {

    this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=6697b7af')
      .subscribe(Response => {
        let data = [Response]

        this.moviedata = data
        console.log(Response);

      });


  }

  onHandleMovieFilter() {
    console.log(this.inputData.value.search);
    this.list = this.list.filter((item) => item.Title == this.inputData.value.search)
  }


  onHandleCategory() {
    console.log(this.inputData1.value.search1);
    this.list=this.list.filter((item)=> item.Genre == this.inputData1.value.search1)

   
    

  }

  


}

  



