[#macro main]
<!DOCTYPE html>
<html class="no-js" lang="${language!'no'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link  data-critical="true" href="[@assetUrl path='bootstrap/4.1.1/css/bootstrap.min.css'/]" rel="stylesheet"/>

  <link data-critical="true" rel="stylesheet" type="text/css" media="all" href="[@assetUrl path='css/main.css' type='absolute'/]" />
</head>

<body data-portal-component-type="page">

<header>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Fixed navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</header>

<!-- Begin page content -->
<main role="main" class="container">
  <h1 class="mt-5">Sticky footer with fixed navbar</h1>
  <section class="main-container" data-portal-component-type="region" data-portal-region="main">
          [#nested /]
  </section>
</main>

<footer class="footer">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
  </div>
</footer


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="[@assetUrl path='bootstrap/4.1.1/js/bootstrap.min.js'/]"></script>
<script src="[@assetUrl path='js/main.js'/]"></script>
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
