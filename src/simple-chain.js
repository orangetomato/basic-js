const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },

    removeLink(position) {
        if (!Number.isInteger(position) || position < 1 || position > this.chain.length - 1) {
            this.chain = [];
            throw Error;
        }

        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const result = [...this.chain];
        this.chain = [];
        return result.join('~~');
    }
};

module.exports = chainMaker;