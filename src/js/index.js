import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><video controls autoplay loop
							src="${variables.background}"
							
							type="video/mp4">
							Your browser does not support the video tag.
						</video> </div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name == null) variables.name = "NAME";
  if (variables.lastname == null) variables.lastname = "";
  if (variables.role == null) variables.role = "Job Position";
  if (variables.country == null) variables.country = "Country";
  if (variables.city == null) variables.city = "City";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1> 
          <h2>${variables.role}</h2>
          <h3>${variables.city} ${variables.country} </h3>
          <ul class = "${variables.socialMediaPosition}">
            <li><a href  ="https://twitter.com/${variables.twitter}" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}" target="_blank"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://v.ftcdn.net/02/92/14/70/700_F_292147064_2XHPdboLnApQG25EsqaV9UQL6JFdu6zn_ST.mp4",
    // this is the url for the profile avatar
    avatarURL:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEelSnb9eNM8Q/profile-displayphoto-shrink_400_400/0/1600480263830?e=1613001600&v=beta&t=J1zVzNPzzHZ2g1R8s-WuU-4LMGEfFnAYlUHErRoBnKw",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
