pathUtil = require('path')

docpadConfig = {
    collections:
        articles: ->
            @getCollection("html").createChildCollection()
                .setFilter('articles', (model) ->
                    relativePath = pathUtil.dirname(model.attributes.fullPath).substr((__dirname+'/src/').length)
                    return relativePath.indexOf('articles/') == 0
                )
                .live()
                .on('add', (model) ->
                    model.setMetaDefaults({layout:"article"})
                )

        tecnicas: ->
            @getCollection("articles").createChildCollection()
                .setFilter('tecnicas', (model) ->
                    relativePath = model.attributes.relativeDirPath
                    return relativePath.indexOf('/tecnicas') != -1
                )
                .setComparator({id: 1})
                .live()

        ferramentas: ->
            @getCollection("articles").createChildCollection()
                .setFilter('ferramentas', (model) ->
                    relativePath = model.attributes.relativeDirPath
                    return relativePath.indexOf('/ferramentas') != -1
                )
                .setComparator({id: 1})
                .live()

        linguagens: ->
            @getCollection("articles").createChildCollection()
                .setFilter('linguagens', (model) ->
                    relativePath = model.attributes.relativeDirPath
                    return relativePath.indexOf('/linguagens-e-frameworks') != -1
                )
                .setComparator({id: 1})
                .live()

        plataformas: ->
            @getCollection("articles").createChildCollection()
                .setFilter('plataformas', (model) ->
                    relativePath = model.attributes.relativeDirPath
                    return relativePath.indexOf('/plataformas') != -1
                )
                .setComparator({id: 1})
                .live()

    documentsPaths: [
        'documents',
        'articles'
    ]

    plugins:
        livereload:
            enabled: false
}

module.exports = docpadConfig