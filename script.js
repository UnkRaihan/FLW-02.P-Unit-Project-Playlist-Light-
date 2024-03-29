// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageDisplay = document.querySelector(".display-image");
let songDisplay = document.querySelector(".display-song");
let artistDisplay = document.querySelector(".display-artist");
let linkDisplay = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

// let imageArray = ["https://i1.sndcdn.com/artworks-FbapH8AGN42qV6FS-RS4UvA-t500x500.jpg", "https://i.ytimg.com/vi/SQnc1QibapQ/maxresdefault.jpg", "https://i.scdn.co/image/ab67616d0000b2734f1dc7490dcc607d75c6d2e9", "https://i.ytimg.com/vi/mTLQhPFx2nM/maxresdefault.jpg", "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209", "https://i.scdn.co/image/ab67616d0000b273d5a8395b0d80b8c48a5d851c"]

// let songArray = ["Hell In Heaven", "Kill Bill", "Still With You", "Die For you", "Hype Boy", "Sure Thing"]

// let artistsArray = ["Twice", "SZA", "JK", "The Weekend", "NewJeans", "Miguel"]

// let linkArray = ["https://open.spotify.com/track/3KCreWc88InXH3XuL54C5a?si=43d259ffad664995", "https://open.spotify.com/track/1Qrg8KqiBpW07V7PNxwwwL?si=bb8989bd34b849e6", "https://www.youtube.com/watch?v=djKdPZiJdvA", "https://open.spotify.com/track/2Ch7LmS7r2Gy2kc64wv3Bz?si=68aea204754945f2", "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD?si=2a8227f197e74374", "https://open.spotify.com/track/0JXXNGljqupsJaZsgSbMZV?si=c04566bf280f4b17"]



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.

let HellInHeaven = {
  image: "https://i1.sndcdn.com/artworks-FbapH8AGN42qV6FS-RS4UvA-t500x500.jpg",
  name: "Hell In Heaven",
  artist: "Twice",
  link: "https://open.spotify.com/track/3KCreWc88InXH3XuL54C5a?si=43d259ffad664995"
}

let KillBill = {
  image: "https://i.ytimg.com/vi/SQnc1QibapQ/maxresdefault.jpg",
  name: "Kill Bill",
  artist: "SZA",
  link: "https://open.spotify.com/track/1Qrg8KqiBpW07V7PNxwwwL?si=bb8989bd34b849e6",
}

let StillWithYou = {
  image: "https://i.scdn.co/image/ab67616d0000b2734f1dc7490dcc607d75c6d2e9",
  name: "Still With You",
  artist: "JK",
  link: "https://www.youtube.com/watch?v=djKdPZiJdvA",
}

let DieForYou = {
  image: "https://i.ytimg.com/vi/mTLQhPFx2nM/maxresdefault.jpg",
  name: "Die For You",
  artist: "The Weekend",
  link: "https://open.spotify.com/track/2Ch7LmS7r2Gy2kc64wv3Bz?si=68aea204754945f2",
}

let HypeBoy = {
  image: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
  name: "Hype Boy",
  artist: "New Jeans",
  link: "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD?si=2a8227f197e74374",
}

let SureThing = {
  image: "https://i.scdn.co/image/ab67616d0000b273d5a8395b0d80b8c48a5d851c",
  name: "Sure Thing",
  artist: "Miguel",
  link: "https://open.spotify.com/track/0JXXNGljqupsJaZsgSbMZV?si=c04566bf280f4b17",
}

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let allsongs = [HellInHeaven, KillBill, StillWithYou, DieForYou, HypeBoy, SureThing]



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {


  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  let userImage = image.value;
  let userSongName = songName.value;
  let userArtists = artist.value;
  let userLinks = songLink.value;

  let userAddition = {
    image: userImage,
    name: userSongName,
    artist: userArtists,
    link: userLinks
  }


  // task 10: use `.push()` to add each input value to the correct array.

  allsongs.push(userAddition);

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  let displayImage = document.querySelector('.display-image');
  displayImage.innerHTML = "";
  let displaySong = document.querySelector('.display-song');
  displaySong.innerHTML = "";
  let displayArtist = document.querySelector('.display-artist');
  displayArtist.innerHTML = "";
  let displayLink = document.querySelector('.display-link');
  displayLink.innerHTML = "";
}


const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  // console.log(arr[0])
  // console.log(arr[1])
  // console.log(arr[2])

}


function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  console.log(allsongs);
  for (let i = 0; i < allsongs.length; i++) {
    imageDisplay.insertAdjacentHTML('beforeend', `<img src=${allsongs[i].image}>`);
  }

  for (let i = 0; i < allsongs.length; i++) {
    songDisplay.insertAdjacentHTML('beforeend', `<p>${allsongs[i].name}</p>`)
  }

  for (let i = 0; i < allsongs.length; i++) {
    artistDisplay.insertAdjacentHTML('beforeend', `<p>${allsongs[i].artist}</p>`)
  }

  for (let i = 0; i < allsongs.length; i++) {
    linkDisplay.insertAdjacentHTML('beforeend', `<a href=${allsongs[i].link}>Link</a>`)
  }


}

function clear() {
  
}




// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
