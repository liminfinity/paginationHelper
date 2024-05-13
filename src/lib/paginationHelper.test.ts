import { PaginationHelper } from "./paginationHelper"

const ITEMS_PER_PAGE = 6;
const ITEM_COUNT = 15;

const helper = new PaginationHelper(ITEM_COUNT, ITEMS_PER_PAGE);

describe("simple tests", () => {

    it("The itemCount field is equal to the number of items", () => {
        expect(helper.itemCount).toBe(ITEM_COUNT)
    })
    it("The itemsPerPage field is equal to the items per page", () => {
        expect(helper.itemsPerPage).toBe(ITEMS_PER_PAGE)
    })
    it("The pageCount call is equal to the number of pages", () => {
        expect(helper.pageCount()).toBe(3)
    })
    it("The pageIndex call is equal to the index of the page on which the element with the given index is located", () => {
        expect(helper.pageIndex(7)).toBe(1)
    })
    it("The pageItemCount call is equal to the number of items on the page with the passed index", () => {
        expect(helper.pageItemCount(1)).toBe(6)
    })
})

describe("difficult tests", () => {

    it("A call to pageIndex with a non-existent element index should return -1", () => {
        expect(helper.pageIndex(-1)).toBe(-1)
    })
    it("A call to pageItemCount with a non-existent page index should return -1", () => {
        expect(helper.pageItemCount(212)).toBe(-1)
    })
    it("A сall pageItemCount with the last page index, which should return the remaining number of items", () => {
        expect(helper.pageItemCount(2)).toBe(3)
    })
})