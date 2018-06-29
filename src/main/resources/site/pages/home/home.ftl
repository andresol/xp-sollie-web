[#macro main]
<!DOCTYPE html>
<html class="no-js" lang="${language!'no'}">
<head>
  <title>Sollies admin web</title>
  <meta charset="utf-8">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <!-- Bootstrap core CSS -->
  <link  href="[@assetUrl path='font-awesome/5.1.0/css/font-awesome.min.css'/]" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
  <link data-critical="true" href="[@assetUrl path='bootstrap/4.1.1/css/bootstrap.min.css'/]" rel="stylesheet"/>
  <link data-critical="true" href="[@assetUrl path='css/creative/creative.css'/]" rel="stylesheet"/>
  <link data-critical="true" rel="stylesheet" type="text/css" media="all" href="[@assetUrl path='css/main.css' type='absolute'/]" />
</head>

<body id="page-top" data-portal-component-type="page">

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">House at Ekeberg</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      [#if menuItems?has_content]
        [#list menuItems as it]
          <li class="nav-item page-header__menu-item">
            <a class="nav-link js-scroll-trigger page-header__menu-link" href="[@pageUrl id=it._id /]">${it.menuName}</a>
          </li>
        [/#list]
      [/#if]
      </ul>
    </div>
  </div>
</nav>

<header class="masthead text-center text-white d-flex">
  <div class="container my-auto">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h1 class="text-uppercase">
          <strong>A smart house</strong>
        </h1>
        <hr>
      </div>
      <div class="col-lg-8 mx-auto">
        <p class="text-faded mb-5">A smart house with it own homepage.</p>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="">Log inn and control the house</a>
      </div>
    </div>
  </div>
</header>

<!-- Begin page content -->
<main role="main" class="container">
  <h1 class="mt-5">About the house</h1>
  <section class="main-container" data-portal-component-type="region" data-portal-region="main">
          [#nested /]
  </section>
</main>

<footer class="footer">
  <div class="container">
    <span class="text-muted">Build with Enonic XP, html5, js, nodejs, java++</span>
  </div>
</footer>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="[@assetUrl path='js/vendors.js'/]"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="[@assetUrl path='bootstrap/4.1.1/js/bootstrap.min.js'/]"></script>
<script src="[@assetUrl path='js/main.js'/]"></script>
<script src="[@assetUrl path='js/react.js'/]"></script>

</body>
</html>
[/#macro]

[@main]
  [#if isFragment!false]
    [@component path="fragment" /]
  [#elseif regions?has_content]
    [#list regions.components as pageComponent]
      [@component path=pageComponent.path /]
    [/#list]
  [/#if]
[/@main]
