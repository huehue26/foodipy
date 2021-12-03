<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION != true) {
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Warning!</strong>Please Go back and then login to see your profile.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>';
    header('location: /foodipy/index.html');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    <link rel="stylesheet" href="/foodipy/css/profile.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="navbar-outermost">
        <main class="home-page">
            <div class="logo">
                <a href="/foodipy/index.html" class="logo">Foodipy</a>
            </div>
            <div class="nav-bar">
                <div class="sub-headings search-bar">
                    <input type="text" class="search-bar-input" placeholder="Search" id="search-input" />
                    <a href="./search.html">
                        <button id="search-submit" style="
                        background-color: transparent;
                        color: white;
                        border: none;"><i class="fas fa-search fa-sm"></i>
                        </button>
                    </a>
                </div>

                <div class="sub-headings">
                    <a href="/foodipy/index.html">
                        <p>Our Bakery</p>
                    </a>
                </div>
                <div class="sub-headings">
                    <a href="/foodipy/search.html">
                        <p id="cont-p">Search</p>
                    </a>
                </div>
                <div class="sub-headings">
                    <a href="#">
                        <p id="cont-p">Rate Us</p>
                    </a>
                </div>
                <div class="sub-headings">
                    <a href="#Follow_us">
                        <p id="cont-p">Follow Us</p>
                    </a>
                </div>
            </div>
        </main>
    </div>
    <div class="padding">
        <div class="col-md-8">
            <!-- Column -->
            <div class="card"> <img class="card-img-top" src="/foodipy/img/lidye-1Shk_PkNkNw-unsplash.jpg"
                    alt="Card image cap">
                <div class="card-body little-profile text-center">
                    <div class="pro-img"><img src="/foodipy/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="user">
                    </div>
                    <h3 class="m-b-0"><?php echo $_SESSION['names'] ?></h3>
                    <p> <?php echo $_SESSION['city'] ?></p>
                    <a href="javascript:void(0)"
                        class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                        data-abc="true">Previous Orders</a>
                    <a href="javascript:void(0)"
                        class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                        data-abc="true">Cart</a>
                    <a href="javascript:void(0)"
                        class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Give
                        Reviews</a>
                    <div class="row text-center m-t-20">
                        <div class="col-lg-4 col-md-4 m-t-20">
                            <h3 class="m-b-0 font-light"><?php echo $_SESSION['phone']?></h3>
                        </div>
                        <div class="col-lg-4 col-md-4 m-t-20">
                            <h3 class="m-b-0 font-light"> <?php echo $_SESSION['email']?></h3>
                        </div>
                        <div class="col-lg-4 col-md-4 m-t-20">
                            <h3 class="m-b-0 font-light"><?php echo $_SESSION['street'] ?></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-cont">
        <div class="parent-footer">
            <div class="footer-heading">Foodipy</div>
            <div class="about-comp">
                <div class="footer-about">
                    About Us
                </div>
                <div class="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus vero quas
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, neque!
                    nobis deleniti mollitia iusto enim sequi cupiditate quam?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, blanditiis.
                </div>
            </div>
            <div class="connection-icons">
                <div class="icons-footer icons-footer-1" id="Follow_us">Connect with Us</div>
                <div class="icons-footer"><i class="fab fa-twitter-square"></i> &nbsp; &nbsp; Follow Us on Twitter</div>
                <div class="icons-footer"><i class="fab fa-facebook-square"></i>&nbsp; &nbsp; Like Us on Facebook</div>
                <div class="icons-footer"><i class="fab fa-instagram-square"></i>&nbsp; &nbsp; Follow Us on &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Instagram</div>
                <div class="icons-footer"><i class="fab fa-youtube-square"></i> &nbsp; &nbsp;Subscribe Us on &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; YouTube</div>
            </div>
            <div class="contact-info-footer">
                <div class="connect-icons-footer icons-footer-1 ">Quick Links</div>
                <div class="connect-icons-footer"><i class="fa-solid fa-house-blank"></i> <a class="quick-link-a"
                        href="./index.html">Visit
                        Home Page</a></div>
                <div class="connect-icons-footer"><i class="fa-solid fa-magnifying-glass-user"></i> <a
                        class="quick-link-a" href="./search.html">Click to Search</a>
                </div>
                <div class="connect-icons-footer"><i class="fa-solid fa-mobile-notch"></i> Call Us on 89456-98760</div>
                <div class="connect-icons-footer"><i class="fa-solid fa-circle-envelope"></i>E-mail at
                    Contact@gmail.com</div>
            </div>
            <div class="line-end">
                <hr>
            </div>
            <div class="copyright-footer">
                <div class="end-footer">© 2021 Foodipy pvt ltd. All Rights Reserved | Design by <span
                        id="nsutian-footer">NSUTians</span></div>
            </div>
        </div>
    </div>
</body>

</html>