export const compileTemplate = (template: string, values: { [index: string]: string }) => {
    return template.replace(/{{(\w+)}}/g, (all, capture) => {
        return values.hasOwnProperty(capture) ? values[capture] : all;
    });
};
