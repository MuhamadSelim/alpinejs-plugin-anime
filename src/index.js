import anime from "animejs";
const Plugin = function (Alpine) {
    Alpine.directive('anime', (el, obj, { evaluateLater, effect, cleanup }) => {
        let { value, expression, modifiers } = obj;
        let evaluate = evaluateLater(expression);
        effect(() => {
            evaluate(options => {
                if(!options.targets)  options.targets =  el;
                anime(options)
            })
        })
        cleanup(() => observer.disconnect())
    })


    Alpine.magic('anime',() => { return value => anime(value)  })
}

export default  Plugin
