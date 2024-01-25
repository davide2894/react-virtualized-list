# TODO

    [x] make list work
        [x] have first virtualization work
        [x] performance optimization
            [x] react memo single list item so that it doesn't get re-rendered from scratch when scrolling up and down through the list
            [x] add throttle so that the handleScroll handler is called only when scrolled is finished
        [x] ui a tabella come nel pdf dei requisiti
        [x] add new row button
            [x] create component
            [x] on click
                [x] add row to the list
        [x] back to top btn:
            [x] add btn at the bottom right corner (from goals next)
            [x] on click: add smooth scroll to the top
        [x] include real data fetched from api (lookup swe) but careful: there should be no hydration issue
            [x] make it work with faker.js
            [x] make it work with 10k
            [x] make it work with 100k with react.memo (needs improvement)
    [] tests: write tests to enrure realability and stability of your compoennt
    [x] style with scss
    [] host on vercel
    [] add readme
    [] understand the logic to find array index with splcie, startIndex & endIdex (to be able to explain it to an actual intervw)
