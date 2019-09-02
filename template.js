/* export template */

let doc = `
<style>
.centered {
    text-align: center;
}
.justify {
    text-align: justify;
}
</style>
<div>
    <h1 class="centered">INDICE ATTI E DOCUMENTI</h1>
        <ul>
            {{#each items}}
                <li><a href="{{url}}" target="_blank">{{name}}</a></li>
            {{/each}}
        </ul>
<p>Roma, {{data}}</p>
<p>Con osservanza,</p>
<p>Avv. {{avvocato}}</p>
</div>
`

module.exports.doc = doc