<script>
    let name = 'Johan Bijlsma';
    let subline = 'Front-end developer... | Blogger... | Dad... | Musician... | Coffee lover...';
    let links = [{label: 'home', link: '/'}, {label: 'about', link: '/about'} , {label: 'blogs', link: '/blogs'},  {label: 'portfolio', link: '/portfolio'},{label: 'contact', link: '/contact'}];
</script>



    <div class="hero">
        <!-- <nav>
        <ul>
	{#each links as link}
		<li><a href="{link.link}">{link.label}</a> </li>
	{/each}
</ul>
</nav> -->
        <h1>{name}</h1>
        <p>{subline}</p>
        <button class="scoll"><span class="visuallyhidden">scroll down...</span>    </button>
    </div>


<style type="text/scss">

</style>
