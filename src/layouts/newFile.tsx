import MainLayout from "./MainLayout.astro";
import { slugify, formatDate } from "../js/utils";
import { Image } from "astro:assets";

<Fragment>
  <MainLayout title={title} description={description}>
    <header>
      <div class="container">
        <small>
          <a href={`/category/${slugify(category)}`} class="badge">
            {category}
          </a>
        </small>
        <h1 class="h2">{title}</h1>
        <p>
          by <a href={`/author/${slugify(author)}`}>{author}</a> .{" "}
          {formatDate(date)}
        </p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width="1200"
        height="600"
        format="avif"
        fit="cover"
        quality={80}
        aspectRatio="5:2"
        class="hero-image"
      />
    </header>
    <div class="post-content">
      <div class="content">
        <slot />
      </div>
      <div class="sidebar"></div>
    </div>
  </MainLayout>
</Fragment>;
