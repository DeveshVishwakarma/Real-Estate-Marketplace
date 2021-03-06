var ERC721MintableComplete = artifacts.require('RealEstateERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    describe('Checking ERC721 Specifications', function () {

        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1, { from: account_one });
            await this.contract.mint(account_three, 2, { from: account_one });
            await this.contract.mint(account_four, 3, { from: account_one });

        })

        it('1: Should return the total supply', async function () {
            let totalSupply = await this.contract.totalSupply.call()
            assert.equal(totalSupply.toNumber(), 3, 'Failed to fetch the correct total supply');

        })

        it('2: Should get token balance', async function () {
            let balance = await this.contract.balanceOf.call(account_two, { from: account_two })
            assert.equal(balance.toNumber(), 1, "Incorrect balance retrieved from the given account");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('3: Should return the token uri', async function () {
            let originalURI='https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1'
            let tokenURI = await this.contract.tokenURI.call(1, { from: account_one });
            assert.equal(tokenURI, originalURI, "Failed to return the original uri");

        })

        it('4: Should transfer token from one owner to another', async function () {
            let tokenId = 1;
            await this.contract.transferFrom(account_two, account_three, tokenId, { from: account_two });

            let newOwner = await this.contract.ownerOf.call(tokenId, {from: account_three});
            assert.equal(newOwner, account_three, "Failed to transfer token from one owner to another");
        })
    });

    describe('Checking the presence of ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: account_one });
        })

        it('1: Should fail when trying to mint address which is not the contract owner', async function () {
            let fail = false;
            try {
                await this.contract.mint(account_four, 4, { from: account_two });
            } catch (e) {
                fail = true;
            }
            assert.equal(fail, true, "Caller is not identified as the contract owner");
        })

        it('2: Should return the correct contract owner', async function () {
            let owner = await this.contract._owner.call({ from: account_one });
            assert.equal(owner, account_one, "Owner should be account_one");
        })

    });
})