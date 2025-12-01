# React-Learning
I will made few react projects here.

## tailwind commands
- ## remove any existing tailwind package
``` npm uninstall tailwindcss -D ```

- ### install Tailwind v3 + postcss + autoprefixer
``` npm install -D tailwindcss@3 postcss autoprefixer ```

- ### now create the config & postcss files (should work)
``` npx tailwindcss init -p ```

- ### index.css  append before root element 
``` 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
