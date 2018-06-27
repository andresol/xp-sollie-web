[#macro youtubeEmbed youtubeLink]
  [#assign videoId=youtubeLink?keep_after("v=") /]
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
[/#macro]
