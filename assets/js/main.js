let clic = 0;

let genderAffichage = (type, categ) => {
    $(`#${type}-${categ}`).click(function() {
        $(`.gender-${categ}`).removeClass('active');
        $(this).addClass('active');

        $(`.featured-${categ}`).hide();

        if (type == 'all') {
            $(`.featured-${categ}`).show();
            clic++
        } else {
            $(`.${type}-${categ}`).show();
        }
    });
};

genderAffichage('all', 'series');
genderAffichage('action', 'series');
genderAffichage('comed', 'series');
genderAffichage('autres', 'series');


let moreAffichage = (classe) => {
    let tableau = $(`.${classe}`).length;

    for (let i=12;i<tableau;i++) {
        $(`.${classe}`).eq(i).hide();
    }

    $(`#more-${classe}`).click(function() {
        for (let i=12;i<tableau;i++) {
            $(`.${classe}`).eq(i).toggle();
        }

        if (clic%2 == 0) {
            $(this).text('Moins de films');
        } else {
            $(this).text('Plus de films');
        }
        clic++;
    })
}

moreAffichage('featured-films');
moreAffichage('featured-series');