
var data = [
    {
        image: 'assets/img/100NCD90/IMG_4715.jpg',
        thumb: 'thumb1.jpg',
        title: 'my first image',
        description: 'Lorem ipsum caption',
		link: '/path/to/destination.html'
    },
    {
        image: 'assets/img/100NCD90/IMG_4716.jpg',
        thumb: 'thumb2.jpg',
        title: 'my second image',
        description: 'Another caption',
        link: '/path/to/destination.html'
    }
];

$('#container').galleria({
    dataSource: data
});


jQuery(document).ready(function() {
	console.log("done loading");
	
});
