<?php
// Prepare prep, cook and total time values
if(isset($_['prepTime']) && $_['prepTime']) {
    $prep_interval = new DateInterval($_['prepTime']);
    $_['timePrep'] = [];
    $_['timePrep']['minutes'] =  $prep_interval->format('%I');
    $_['timePrep']['hours'] = $prep_interval->format('%h');
}
if(isset($_['cookTime']) && $_['cookTime']) {
    $cook_interval = new DateInterval($_['cookTime']);
    $_['timeCook'] = [];
    $_['timeCook']['minutes'] = $cook_interval->format('%I');
    $_['timeCook']['hours'] = $cook_interval->format('%h');
}
if(isset($_['totalTime']) && $_['totalTime']) {
    $total_interval = new DateInterval($_['totalTime']);
    $_['timeTotal'] = [];
    $_['timeTotal']['minutes'] = $total_interval->format('%I');
    $_['timeTotal']['hours'] = $total_interval->format('%h');
}
?>
<div id="controls">
    <div class="breadcrumb">
        <div class="crumb svg crumbhome ui-droppable">
            <a href="#" class="icon-category-organization"></a>
        </div>
        <div class="crumb svg">
            <a href="#recipes/<?php echo $_['id']; ?>"><?php echo $_['name']; ?></a>
        </div>
    </div>
    <div class="actions">
        <a id="edit-recipe" href="#recipes/<?php echo $_['id']; ?>/edit" class="button svg action" title="<?php p($l->t('Edit recipe')); ?>">
            <span class="icon icon-rename"></span>
            <span class="hidden-visually"><?php p($l->t('Edit recipe')); ?></span>
        </a>
    </div>
    <div class="actions">
        <button id="print-recipe" class="button svg action" title="<?php p($l->t('Print recipe')); ?>">
            <span class="icon icon-category-office"></span>
            <span class="hidden-visually"><?php p($l->t('Print recipe')); ?></span>
        </button>
    </div>
    <div class="actions">
        <button id="delete-recipe" class="button svg action" data-id="<?php echo $_['id']; ?>" title="<?php p($l->t('Delete recipe')); ?>">
            <span class="icon icon-delete"></span>
            <span class="hidden-visually"><?php p($l->t('Delete recipe')); ?></span>
        </button>
    </div>
</div>

<?php if(isset($_['image']) && $_['image']) { ?>
    <header class="collapsed<?php if($_['print_image']) echo ' printable'; ?>">
        <img src="<?php echo $_['image_url']; ?>">
    </header>
<?php } ?>

<div class="recipe-content">
	<h2><?php echo $_['name']; ?></h2>

    <div class="recipe-details">
        <p><?php echo $_['description']; ?></p>

        <?php if(isset($_['url']) && $_['url']) { ?>
            <p><strong><?php p($l->t('Source')); ?>: </strong><a target="_blank" href="<?php echo $_['url']; ?>"><?php echo $_['url']; ?></a></p>
        <?php } ?>

        <p><strong><?php p($l->t('Servings')); ?>: </strong><?php echo $_['recipeYield']; ?></p>
    </div>

	<div id="app-recipe-content"></div>
	<div id="app-recipe-data" style="display:none"><?php echo str_replace("'", "\\'", json_encode($_)); ?></div>

</div>
