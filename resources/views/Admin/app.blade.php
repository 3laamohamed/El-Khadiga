<!DOCTYPE html>
<html lang="en" dir="ltr">
<!--begin::Head-->
<head>
    <base href="../../../">

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />

    <link href="{{asset('/assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />

    <link href="{{asset('assets/css/icons/icomoon/styles.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/custom-style.css')}}" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.0/css/pikaday.min.css"  rel="stylesheet" type="text/css"/>
    <link href="{{ mix('/css/admin-app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/Admin/app.js') }}" defer></script>
    <title id="titleShop">El Khadiga Admin</title>
    <link rel="shortcut icon" id="iconAnd" href="/images/logo.png" />
    <link rel="apple-touch-icon" id="iconIos" href="/images/logo.png">

    <style>
        .vue-date-picker-custom{
            padding-left: 31px !important;
            font-family: 'Inter' !important;
        }
        .dp__arrow_bottom{
            display: none;
        }
    </style>
    @inertiaHead
</head>
<!--end::Head-->
<!--begin::Body-->
<body id="kt_body" class="header-tablet-and-mobile-fixed aside-enabled">
<script>
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.setAttribute('data-theme-mode', 'light');
    localStorage.setItem('data-theme', 'light');
</script>
<!--begin::Main-->
<!--begin::Root-->
<div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    @inertia
    <!--end::Page-->
</div>



<!--end::Root-->
<!--end::Main-->
<!--begin::Scrolltop-->
<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
    <span class="svg-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
					<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
				</svg>
			</span>
    <!--end::Svg Icon-->
</div>
<!--end::Scrolltop-->
<!--begin::Javascript-->
<script>let hostUrl = "/assets/";</script>
<!--begin::Global Javascript Bundle(mandatory for all pages)-->
<script src="{{asset('/assets/js/scripts.bundle.js')}}"></script>
<script src="{{asset('/assets/plugins/global/plugins.bundle.js')}}"></script>

<!--end::Global Javascript Bundle-->

<!--begin::Page Custom Javascript(used by this page)-->
<script>
    let wi = window.location.pathname
    if(wi.includes('website/form')){
        let match = wi.match(/\/form\/(\d+)/)
        if(match && match[1]){
            axios.post("/website/checkStore", {
                id: match[1],
            })
            .then((response) => {
                $("#iconAnd").attr('href',response.data.logo_url)
                $("#iconIos").attr('href',response.data.logo_url)
                $('#titleShop').html(response.data.name +' | Book appointment')
            })
            .then((error) => console.log(error));
        }
    }
</script>

<!--end::Javascript-->
</body>
<!--end::Body-->
</html>
