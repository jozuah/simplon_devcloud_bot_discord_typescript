import {injectable} from "inversify";

@injectable()
export class PingFinder {

    private regexp = 'hello le robot';
    private test_word = 'bonjour';

    public isPing(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }

    public isTestWord(stringToSearch: string): boolean {
        return stringToSearch.search(this.test_word) >= 0;
    }
}