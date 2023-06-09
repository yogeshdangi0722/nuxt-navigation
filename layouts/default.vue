<template>
    <div>
        
       <nav>
            <NuxtLink to="/">
                Home
            </NuxtLink>
            <NuxtLink to="/about">
                About page
            </NuxtLink>
            <NuxtLink to="/contact">
                Contact page
            </NuxtLink>

            <NuxtLink to="/product">
                Product page
            </NuxtLink>
       </nav>
        <div>
            <slot />
        </div>
        <h2>default footer</h2>
    </div>
</template>