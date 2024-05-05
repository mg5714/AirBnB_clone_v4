$(document).ready(function() {
    var selectedAmenities = {};

    $('.amenity-checkbox').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if (this.checked) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        updateSelectedAmenities();
    });

    function updateSelectedAmenities() {
        var $selectedList = $('#selected-amenities');
        $selectedList.empty();

        Object.values(selectedAmenities).forEach(function(amenityName) {
            $selectedList.append('<li>' + amenityName + '</li>');
        });
    }
});
