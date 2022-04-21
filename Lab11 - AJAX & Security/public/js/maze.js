(function ($) {
  var show = $("#show");
  var showList = $("#showList");
  var error = $("#error");
  var homeLink = $("#homeLink");
  var searchForm = $("#searchForm");
  var searchTerm = $("#search_term");

  var requestConfig = {
    method: "GET",
    url: "http://api.tvmaze.com/shows",
  };

  show.hide();
  showList.hide();
  error.hide();
  homeLink.hide();

  //////////======== ON PAGE LOAD =============////////////

  $.ajax(requestConfig).then(function (response) {
    var shows = $(response);
    for (let i = 0; i <= shows.length - 1; i++) {
      showList.append(
        `<li><a class="listItem" href="${shows[i]._links.self.href}"> ${shows[i].name}</a></li>`
      );
    }
    showList.show();
  });

  //////////======== RESULTS FROM SEARCH =============////////

  searchForm.submit((event) => {
    event.preventDefault();
    show.hide();
    homeLink.hide();

    if (searchTerm.val().trim() == "" || !searchTerm.val()) {
      error.show();
      showList.show();
      error.html("You must enter a search value that is not empty!");
      searchTerm.focus();
      searchForm.trigger("reset");
    } else {
      showList.empty();
      show.hide();
      homeLink.hide();

      var requestConfig = {
        method: "GET",
        url: "http://api.tvmaze.com/search/shows?q=" + searchTerm.val().trim(),
      };

      $.ajax(requestConfig).then(function (response) {
        var showresults = $(response);
        for (let i = 0; i < shows.length; i++) {
          const li = `<li><a href="${showresults[i].show._links.self.href}"> ${showresults[i].show.name} </a></li>`;
          showList.append(li);
          showList.show();
        }
      });

      searchForm.trigger("reset");
      searchTerm.focus();
    }
  });

  /////=========CLICK ON SHOW PAGE==============///////

  $(document).on("click", ".listItem", function (event) {
    event.preventDefault();
    showList.hide();
    show.empty();

    var requestConfig = {
      method: "GET",
      url: this.href,
    };

    $.ajax(requestConfig).then(function (response) {
      if (!response.name) {
        response.name = "N/A";
      }
      show.append(`<h1>${response.name}</h1>`);
      if (!response.image) {
        response.image = { medium: "/public/no_image.jpeg" };
      }
      show.append(`<img src=${response.image.medium}>`);
      if (!response.language) {
        response.language = "N/A";
      }
      if (!response.genres) {
        response.genres = ["N/A"];
      }
      if (!response.rating.average) {
        response.rating.average = "N/A";
      }
      if (!response.network) {
        response.network.name = "N/A";
      }
      if (!response.summary) {
        response.summary = "N/A";
      }

      show.append(`
      <dl>
        <dt>Language</dt>
        <dd>${response.language}</dd>
        <dt>Genres</dt>
        <dd>
          <ul id="genres"></ul>
        </dd>
        <dt>Average Rating</dt>
        <dd>${response.rating.average}</dd>
        <dt>Network Name</dt>
        <dd>${response.network.name}</dd>
        <dt>Summary</dt>
        <dd>${response.summary}</dd>
      </dl>
      `);

      for (let i = 0; i < response.genres.length; i++) {
        $("#genres").append(`<li>${response.genres[i]}</li>`);
      }

      homeLink.show();
      show.show();
      error.hide();
    });
  });
})(window.jQuery);
