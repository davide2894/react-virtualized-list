# TODO

    [] make list work
        [x] have first virtualization work
        [] wrap li in react.memo
        [] back to top btn:
            [] add btn at the bottom right corner (from goals next)
            [] on click: add smooth scroll to the top
        [] add new row button
            [] create component
            [] on click
                [] add row to the list
        [] make it work with 100k with react.memo
        [] include real data fetched from api (lookup swe) but careful: there should be no hydration issue
    [] performance optimization
        [] react memo single list item so that it doesn't get re-rendered from scratch when scrolling up and down through the list
        [] add debounce so that the handleScroll handler is called only when scrolled is finished
    [] tests: write tests to enrure realability and stability of your compoennt
    [] style with scss
    [] understand the logic to find array index with splcie, startIndex & endIdex (to be able to explain it to an actual intervw)
    [] host on vercel
