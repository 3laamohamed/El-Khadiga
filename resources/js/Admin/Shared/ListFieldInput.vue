<template>
    <div class="list-field">
        <div class="list-field__head">
            <label class="list-field__label">{{ label }}</label>
            <button type="button" class="list-field__add" @click="addItem">
                <span aria-hidden="true">+</span>
                {{ addLabel }}
            </button>
        </div>

        <div class="list-field__rows">
            <div v-for="(item, index) in items" :key="index" class="list-field__row">
                <input
                    type="text"
                    class="form-control list-field__input"
                    :placeholder="placeholder"
                    v-model="items[index]"
                    @input="emitUpdate"
                />
                <button
                    type="button"
                    class="list-field__remove"
                    :disabled="items.length === 1 && !items[0]"
                    title="Remove"
                    @click="removeItem(index)"
                >
                    ×
                </button>
            </div>
        </div>

        <p v-if="hint" class="list-field__hint">{{ hint }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
    addLabel: {
        type: String,
        default: 'Add',
    },
    hint: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const items = ref(['']);

const syncFromModel = (value) => {
    const lines = String(value || '')
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    items.value = lines.length ? [...lines] : [''];
};

watch(() => props.modelValue, syncFromModel, { immediate: true });

const emitUpdate = () => {
    emit(
        'update:modelValue',
        items.value.map((line) => line.trim()).filter(Boolean).join('\n')
    );
};

const addItem = () => {
    items.value.push('');
};

const removeItem = (index) => {
    if (items.value.length === 1) {
        items.value[0] = '';
    } else {
        items.value.splice(index, 1);
    }

    emitUpdate();
};
</script>

<style scoped>
.list-field {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
}

.list-field__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
}

.list-field__label {
    margin: 0;
    color: #1a1a1a;
    font-size: 0.92rem;
    font-weight: 700;
}

.list-field__add {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.4rem 0.75rem;
    border: 1px solid #d7e0d7;
    border-radius: 999px;
    background: #fff;
    color: #5A8F3C;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.list-field__add span {
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(90, 143, 60, 0.12);
    font-size: 1rem;
    line-height: 1;
}

.list-field__add:hover {
    background: rgba(90, 143, 60, 0.08);
    border-color: rgba(90, 143, 60, 0.35);
}

.list-field__rows {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.list-field__row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.list-field__input {
    min-height: 44px;
    border-radius: 10px;
    border-color: #e6ebe6;
    background: #fafbfa;
}

.list-field__input:focus {
    border-color: rgba(90, 143, 60, 0.45);
    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);
    background: #fff;
}

.list-field__remove {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid #e6ebe6;
    border-radius: 10px;
    background: #fff;
    color: #A91E2C;
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.list-field__remove:hover:not(:disabled) {
    background: rgba(169, 30, 44, 0.08);
    border-color: rgba(169, 30, 44, 0.25);
}

.list-field__remove:disabled {
    opacity: 0.35;
    cursor: not-allowed;
}

.list-field__hint {
    margin: 0;
    color: #6b7280;
    font-size: 0.78rem;
}
</style>
