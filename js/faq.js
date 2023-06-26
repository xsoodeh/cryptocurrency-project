$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).siblings(".question").find(".btn i").html("remove");
        $(this).prev(".question").addClass("highlight");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).parent().find(".question .btn i").html("remove");
    }).on('hide.bs.collapse', function () {
        $(this).parent().find(".question .btn i").html("add");
    });

    // Highlight open collapsed element
    $(".question .btn").click(function () {
        $(".question").not($(this).parents()).removeClass("highlight");
        $(this).parents(".question").toggleClass("highlight");
    });
});