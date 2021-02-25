<script>
    let title = 'Blogs about Front-end development';
    let blogs = [
        {blogtitle: 'Using animations and transitions to bring your website to life', link: '', intro: 'In this blogpost I will show you how to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit unde accusamus. Sit, vero. Sapiente unde, consectetur quam, porro labore aspernatur suscipit exercitationem dolor, iste esse sit tempora ut nemo?', imgurl:'animation.jpg' , publishDate: '09 april 2019'  },
        // {blogtitle: 'JavaScript Frameworks, which one to choose', link: '', intro: 'In this blogpost I will show you how to Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellat nisi voluptate odit animi atque laborum sed suscipit quisquam placeat distinctio inventore, earum tenetur sit. Architecto est enim reprehenderit odio!', imgurl:'macbook.jpg' , publishDate: '09 april 2019'  },
        {blogtitle: 'Jamstack_conf: my highlights', link: '', intro: 'In this blogpost I will show you how to Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, id at? Possimus, autem fuga? Beatae ad cupiditate distinctio molestiae adipisci suscipit non, fugiat repellendus sit eveniet quam numquam ipsa voluptates?', imgurl:'jamstack_conf-london.jpeg' , publishDate: '24 juli 2019 '  },
        {blogtitle: 'Taking a look at the Jamstack... What is it, and how to use it?', link: '', intro: 'In this blogpost I will show you how to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ratione adipisci hic quibusdam, perspiciatis sit autem eius ipsam, dolor libero quis animi temporibus voluptate? Excepturi eaque corporis accusamus reiciendis incidunt.', imgurl:'jam.jpg' , publishDate: '24 juli 2019 '  },
    ];

</script>
<h2>{title}</h2>
<div class="row">
	{#each blogs as blog}

        <a href="{blog.link}" class="onethird card">

        <img src="{blog.imgurl}" alt="{blog.blogtitle}">
            <h3>{blog.blogtitle}</h3>
            <p class="intro">{blog.intro}</p>
            <button>continue...</button>

    </a>

	{/each}

</div>



<style type="text/scss">

</style>