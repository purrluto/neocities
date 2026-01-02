// Made w/ jquery.

$( function() {
    $( ".draggable" ).draggable(
        {containment: "parent", handle: ".draggable-header"}
    );

    // minimize
    $( ".min-button" ).click(
        function(){
            $(this).closest( ".draggable" ).find( ".draggable-body" ).toggle();
        }
    );

    // dropdown
    $( ".dropdown-toggle" ).click(
        function(){
            $(this).closest( ".dropdown" ).siblings().find( ".dropdown-select" ).hide();
            $(this).closest( ".dropdown" ).find( ".dropdown-select" ).toggle();
        }
    )

    // hide all dropdowns when clicking off
    $(document).on('click', function(event) {
        if (!$(event.target).closest( ".dropdown" ).length) {
            $( ".dropdown-select" ).hide();
        }
    });
} );