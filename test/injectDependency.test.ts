import { InjectDependency } from '../lib';
import { IProduct, IRating } from '../lib/types';


describe('Dependency Injection', () => {
      test("Should inject Rate class into Order class", () => {

        class Rate implements IRating {
           public rating = 1;
            rate(rating: number) {
                this.rating = rating;
            }
            getRating() {
                return this.rating;
            }
        }

        @InjectDependency([Rate])
        class Product {
            public Rate: Rate;
            constructor() {}
        }
 
        const product = new Product();
        product.Rate.rate(5);
        expect(product.Rate.rate).toBeTruthy();
        expect(product.Rate.rating).toBe(5);
    });
});