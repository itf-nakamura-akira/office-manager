import { Directive, EventEmitter, OnDestroy } from '@angular/core';

/**
 * OnDestroyの実装を補助する拡張クラス。
 */
@Directive()
export class OnDestroyEmitter implements OnDestroy {
    private readonly onDestroy$ = new EventEmitter();

    ngOnDestroy(): void {
        this.onDestroy$.emit();
    }
}
