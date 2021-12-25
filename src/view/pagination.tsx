import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { wait } from "src/util/utils";

export default class Pagination extends Component<any, any> {
    pages() {
        let pages = [];
        for (let i = this.rangeStart(); i <= this.rangeEnd(); i++) {
            pages.push(i);
        }
        return pages;
    }

    rangeStart() {
        let start = this.props.current - this.props.pageRange;
        return start > 0 ? start : 1;
    }

    rangeEnd() {
        let end = this.props.current + this.props.pageRange;
        let totalPages = this.totalPages();
        return end < totalPages ? end : totalPages;
    }

    totalPages() {
        return Math.ceil(this.props.total / this.props.perPage);
    }

    nextPage() {
        return this.props.current + 1;
    }

    prevPage() {
        return this.props.current - 1;
    }

    hasFirst() {
        return this.rangeStart() !== 1;
    }

    hasLast() {
        return this.rangeEnd() < this.totalPages();
    }

    hasPrev() {
        return this.props.current > 1;
    }

    hasNext() {
        return this.props.current < this.totalPages();
    }

    changePage(page: any) {
        this.props.onPageChanged(page);
    }

    render() {
        return (
            <div className="pagination">
                <div className="pagination-left">
                    <a
                        href="#"
                        className={!this.hasPrev() ? "pagination-hidden" : ""}
                        onClick={(e) => this.changePage(this.prevPage())}
                    >
                        <Icon icon="tabler:chevrons-left" aria-label="Prev" />
                    </a>
                </div>

                <div className="pagination-middle">
                    <ul>
                        <li
                            className={
                                !this.hasFirst() ? "pagination-hidden" : ""
                            }
                        >
                            <a href="#" onClick={(e) => this.changePage(1)}>
                                1
                            </a>
                        </li>
                        <li
                            className={
                                !this.hasFirst() ? "pagination-hidden" : ""
                            }
                        >
                            <span style={{ color: "var(--text-faint)" }}>
                                ...
                            </span>
                        </li>
                        {this.pages().map((page, index) => {
                            const pager = !this.hasFirst()
                                ? index <= 3
                                : index <= 3 && index !== 0;
                            const pageNumber = pager && (
                                <li key={index}>
                                    <a
                                        href="#"
                                        onClick={(e) => this.changePage(page)}
                                        className={
                                            this.props.current == page
                                                ? "current"
                                                : ""
                                        }
                                    >
                                        {page}
                                    </a>
                                </li>
                            );

                            return pageNumber;
                        })}
                        <li
                            className={
                                !this.hasLast() ? "pagination-hidden" : ""
                            }
                        >
                            {" "}
                            <span style={{ color: "var(--text-faint)" }}>
                                ...
                            </span>
                        </li>
                        <li
                            className={
                                !this.hasLast() ? "pagination-hidden" : ""
                            }
                        >
                            <a
                                href="#"
                                onClick={(e) =>
                                    this.changePage(this.totalPages())
                                }
                            >
                                {this.totalPages()}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="pagination-right">
                    <a
                        href="#"
                        className={!this.hasNext() ? "pagination-hidden" : ""}
                        onClick={(e) => {
                            wait(50000);
                            this.changePage(this.nextPage());
                        }}
                    >
                        <Icon icon="tabler:chevrons-right" aria-label="Next" />
                    </a>
                </div>
            </div>
        );
    }
}

//@ts-ignore
Pagination.defaultProps = {
    pageRange: 2,
};
