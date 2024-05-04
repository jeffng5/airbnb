module.exports = {
    pages: {
        'reservation' : {
            entry: './src/pages/Reservation/main.js',
            template: 'public/reservation.html',
            title: 'Reservation',
            chunks: [ 'chunk-vendors', 'chunk-common', 'reservation' ]
        },

        'gallery' : {
            entry: './src/pages/Gallery/main.js',
            template: 'public/gallery.html',
            title: 'Gallery',
            chunks: ['chunk-vendors', 'chunk-common', 'gallery']
        },

        'Reviews' : {
            entry: './src/pages/Reviews/main.js',
            template: 'public/reviews.html',
            title: 'Reviews',
            chunks: ['chunk-vendors', 'chunk-common', 'reviews']
        },

        'Amenities' : {
            entry: './src/pages/Amenities/main.js',
            template: 'public/amenities.html',
            title: 'Amenities',
            chunks: ['chunk-vendors', 'chunk-common', 'amenities']
        }
    }

}