{
$('#album-title').text(album.title);
$('img#album-cover-art').attr('src', album.albumArtUrl);
$('.artist').text(album.artist);
$('#releaseInfo').text(album.releaseInfo);
}
