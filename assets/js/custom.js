// custom.js
$(document).ready(function () {

    const menu = $(".menu");
    // const stickyContacts = $("#stickyContactButtons");
    let menuToggleTimeout;
    let menuActive = false;

    $(document).on('click', '.menu-icon', function () {

        const menu = $(".menu");
        if (menuActive) { return; }

        menuActive = true;
        menu.css('margin-top', '0px');
        menu.focus();

        clearTimeout(menuToggleTimeout);
        menuToggleTimeout = setTimeout(function () {
            menuActive = false;
            menu.css('margin-top', '-800px');
            menu.blur()
            // stickyContacts.css('margin-bottom', '-100px');
        }, 5000);
    })


    $('.menu-icon').focusout(function () {
        const menu = $(".menu");
        menuActive = false;
        menu.css('margin-top', '-800px');
    });

    // open Image from Gallery
    $('.img-gallery-item').on('click', function (e) {
        e.preventDefault()
        const src = $(this).css('background-image');
        $('#galleyModalImg').css('background-image', src)
        $('#galleyModalImg').css('top', '0')
    })
    // Close galley Image
    $('#galleyModalImg').on('click', function (e) {
        e.preventDefault()
        $(this).css('background-image', '');
        $('#galleyModalImg').css('top', '-200vh')
    })


    // Video banner Overlay
    // $('.video-overlay').height($('.banner-video').height() - 80)
    // var recreationalBannerVideo = document.getElementById("videoBannerRecreationalGym");
    // recreationalBannerVideo.playbackRate = 0.6;


})




function submitRegisterForm() {
    console.log('OK')
    // myHTML.replace(/<[^>]+>/g, '');
    const name = $('#name').val().replace(/<[^>]+>/g, '');
    const phone = $('#phone').val().replace(/<[^>]+>/g, '');
    const email = $('#email').val().replace(/<[^>]+>/g, '');
    const message = $('#message').val().replace(/<[^>]+>/g, '');

    if(name == '') { 
        $('#name').focus();    
        alert('please enter name')
    }
    else if(phone == '') { 
        $('#phone').focus();    
        alert('please enter phone')
    }
    else if(email == '') { 
        $('#email').focus();
        alert('please enter email')
    }
    else {
        $.post(
            'prg/register.php',
            {
                name, phone, email, message
            },
            function(data) {
                // console.log(data)
            }
        )
    }
    $('#registerModal').modal('hide');
}




$(document).ready(function() {
    
    $('.contact-event-btn').on('click', function(e) {
        console.log($(this))
        e.preventDefault();
        // location.href = $(this).attr('href')
        logEvent($(this).attr('data-event'))
        .then(data => {
            console.log(data)
        })
        // location.href = $(this).attr('href')
        if($(this).attr('href') == '_blank') {
            window.open($(this).attr('href'), '_blank').focus();
        }
        else{
            location.href = $(this).attr('href');
        }
    })


})

function logEvent(event) {
    return new Promise((resolve, reject) => {
        $.post(
            'prg/log_event.php',
            {
                event: event
            },
            function(data) {
                resolve(data);
            }
        )
    })
}


function fetchBlogs() {
    return new Promise((resolve, reject) => {
        $.post(
            'prg/fetch_posts.php', 
            {
                limit: 3
            },
            function(data) {
                // console.log(data);
                const blogs = JSON.parse(data);
                let html = '';
                blogs.forEach(item => {
                    html += `
                    <div class="col-md-4">
                        <a href="blogs/${item['title_id']}">
                            <div class="blog-item">
                                <div class="blog-item-img bg-center-contain"
                                    style="background-image: url('/blogs/${item['banner']}')"></div>
                                <h3>${item['title']}</h3>
                                <p>
                                    ${item['excerpt'].substr(0, 200)}<br>
                                    <sub>(Click to read more..)</sub>
                                </p>
                            </div>
                        </a>
                    </div>
                    `
                });

                $('.blog-section .blogs').html(html)
                resolve()

            }
        )
    })
}
