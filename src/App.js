function App() {
    returner(
        head(
            link('style.css'),
            title('Snow App'),
        ),
        body(
            h1('Hello Snow!'),
        ),
    );
}

App();
