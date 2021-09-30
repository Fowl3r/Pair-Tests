function gameOfLife(cells, alive) {
    if (cells < 2) {
        return "dies"
    } else if (cells > 3) {
        return "dies";
    } else if (cells == 2 || cells > 2) {
        return "lives";

    } else if (alive == false && cells == 3) {
        return "lives";
    } else {
        return false;
    }
}

export { gameOfLife };
