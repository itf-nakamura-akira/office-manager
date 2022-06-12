import { OnDestroyEmitter } from './on-destroy-emitter.directive';

describe('OnDestroyEmitter', () => {
    it('should create an instance', () => {
        const directive = new OnDestroyEmitter();

        expect(directive).toBeTruthy();
    });

    it('ngOnDestroyのタイミングでonDestroy$が発火すること。', (done) => {
        const directive = new OnDestroyEmitter();

        directive['onDestroy$'].subscribe(() => done());
        directive.ngOnDestroy();
    });
});
